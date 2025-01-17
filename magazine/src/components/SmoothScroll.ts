export function SmoothScroll(
  initialTarget: HTMLElement | Document,
  speed: number,
  smooth: number,
): void {
  const target = (
    initialTarget === document
      ? document.documentElement || document.body.parentNode || document.body
      : initialTarget
  ) as HTMLElement

  let moving = false // Indicates if smooth scrolling is active
  let pos = target.scrollTop // Current target position
  let manualScroll = false // Indicates if manual scroll (like scrollbar dragging) is happening

  // Listen for wheel-based scroll
  target.addEventListener('mousewheel', scrolled as EventListener, {
    passive: false,
  })

  // Listen for manual scrollbar or user scrolling
  target.addEventListener('scroll', syncScroll, { passive: true })

  // Detect manual scroll start (mousedown) and end (mouseup)
  target.addEventListener('mousedown', () => (manualScroll = true))
  document.addEventListener('mouseup', () => {
    manualScroll = false
    pos = target.scrollTop // Sync position after manual scrolling ends
  })

  function syncScroll() {
    if (!moving) {
      pos = target.scrollTop // Sync position only if smooth scrolling is inactive
    }
  }

  function scrolled(e: Event) {
    e.preventDefault?.()

    const evt = e as WheelEvent
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let delta = (evt as any).delta || evt.deltaY

    // Fallback for Firefox/others
    if (delta === undefined && evt.detail) {
      delta = -evt.detail
    }

    // Clamp delta to range [-1, 1]
    delta = Math.max(-1, Math.min(1, delta))
    pos += delta * speed

    // Ensure `pos` stays within bounds
    pos = Math.max(0, Math.min(pos, target.scrollHeight - target.clientHeight + smooth * 2))

    if (!moving) update()
  }

  function update() {
    if (manualScroll) {
      moving = false // If manual scrolling occurs, halt smooth scrolling
      return
    }

    moving = true
    const delta = (pos - target.scrollTop) / smooth

    target.scrollTop += delta

    if (Math.abs(delta) > 0.5) {
      requestFrame(update)
    } else {
      moving = false // Stop smooth scrolling when the delta is small
    }
  }

  const requestFrame: (cb: FrameRequestCallback) => number = (() => {
    return (
      window.requestAnimationFrame ||
      function (cb: FrameRequestCallback) {
        return window.setTimeout(cb, 1000 / 50)
      }
    )
  })()
}

export default SmoothScroll
