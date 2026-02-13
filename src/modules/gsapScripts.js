gsap.registerPlugin(ScrollTrigger)

function initSpaceAnimation() {
  if (window.innerWidth <= 1024) {
    return null
  }

  const heroSection = document.querySelector('.space')
  const container = document.querySelector('.space .container')
  const boxes = document.querySelectorAll('.space__card')
  const circ = document.querySelector('.space__cont-circ')

  if (!heroSection || !container || boxes.length === 0) {
    return null
  }

  const centerX = container.offsetWidth / 2
  const centerY = container.offsetHeight / 2
  const diametr = container.offsetWidth
  const radius = diametr / 2
  const totalBoxes = boxes.length
  const angleStep = 360 / totalBoxes

  const baseAngles = []

  boxes.forEach((box, i) => {
    const angle = i * angleStep
    baseAngles.push(angle)

    const rad = (angle * Math.PI) / 180
    const x = centerX + radius * Math.cos(rad)
    const y = centerY + radius * Math.sin(rad)

    gsap.set(box, {
      x: x - box.offsetWidth / 2,
      y: y - box.offsetHeight / 2,
    })
  })

  let isAnimating = false
  let rotationTimeline = null

  function createAnimation() {
    if (rotationTimeline) {
      rotationTimeline.kill()
    }

    rotationTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: heroSection,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        toggleActions: 'play none none reverse',
        onEnter: () => {
          isAnimating = true
        },
        onLeave: () => {
          isAnimating = false
        },
        onEnterBack: () => {
          isAnimating = true
        },
        onLeaveBack: () => {
          isAnimating = false
        },
      },
    })

    rotationTimeline.to(
      {},
      {
        duration: 1,
        onUpdate: () => {
          const progress = rotationTimeline.progress()

          const rotationAngle = progress * 30

          boxes.forEach((box, i) => {
            const currentAngle = baseAngles[i] + rotationAngle
            const rad = (currentAngle * Math.PI) / 180

            const x = centerX + radius * Math.cos(rad)
            const y = centerY + radius * Math.sin(rad)

            rotateCirc(currentAngle)

            gsap.set(box, {
              x: x - box.offsetWidth / 2,
              y: y - box.offsetHeight / 2,
            })
          })
        },
      }
    )
  }

  function rotateCirc(angle) {
    if (circ) {
      circ.style.transform = `translate(-50%, -50%) rotate(-${angle / 2}deg)`
    }
  }

  createAnimation()

  return {
    destroy: () => {
      if (rotationTimeline) {
        rotationTimeline.kill()
        rotationTimeline = null
      }
      boxes.forEach((box) => {
        gsap.set(box, { clearProps: 'x,y' })
      })
    },
  }
}

let spaceAnimationInstance = null

function initSpaceAnimationWithDelay() {
  setTimeout(() => {
    if (spaceAnimationInstance) {
      spaceAnimationInstance.destroy()
      spaceAnimationInstance = null
    }
    spaceAnimationInstance = initSpaceAnimation()
  }, 100)
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSpaceAnimationWithDelay)
} else {
  initSpaceAnimationWithDelay()
}

let resizeTimer
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(() => {
    if (spaceAnimationInstance) {
      spaceAnimationInstance.destroy()
      spaceAnimationInstance = null
    }
    if (window.innerWidth > 1024) {
      spaceAnimationInstance = initSpaceAnimation()
    } else {
      const boxes = document.querySelectorAll('.space__card')
      boxes.forEach((box) => {
        gsap.set(box, { clearProps: 'x,y' })
      })
    }
  }, 250)
})

function initIndividualSmoothAppear() {
  const config = {
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      start: 'top 75%',
      once: true,
      toggleActions: 'play none none reverse',
    },
  }

  gsap.utils.toArray('.gsap-smooth').forEach((element) => {
    gsap.fromTo(
      element,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: config.duration,
        ease: config.ease,
        scrollTrigger: {
          ...config.scrollTrigger,
          trigger: element,
        },
      }
    )
  })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initIndividualSmoothAppear)
} else {
  initIndividualSmoothAppear()
}
