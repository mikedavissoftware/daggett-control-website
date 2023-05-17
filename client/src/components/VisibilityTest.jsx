



export default function VisibilityTest({ isVisible, containerRef }) {



  return (
    <div>
      <h2 className={isVisible ? ("text-3xl animate slide") : ("opacity-0")} ref={containerRef}>Test Visibility</h2>
    </div>
  )
}