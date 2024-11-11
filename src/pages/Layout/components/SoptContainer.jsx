
export default function SoptContainer({children, display, margin}) {
  return (
    <div className={`w-full h-full ${display} ${margin}`}>
        {children}
    </div>
  )
}
