interface AwesomeSwitchProps {
  label: string
  onClick: () => void
}

export default function AwesomeSwitch(props: AwesomeSwitchProps) {
  const handleClick = () => {
    props.onClick()
  }

  return (
    <div
      className="awesome-switch"
      style={
        { '--awesome-switch-label': `"${props.label}"` } as React.CSSProperties
      }
    >
      <input type="checkbox" id="switch" onChange={handleClick} />
      <label htmlFor="switch">{props.label}</label>
    </div>
  )
}
