type StatisticNumberProps = {
  value?: number
  label?: string
}

export default function StatisticNumber({
  value,
  label,
}: StatisticNumberProps) {
  return (
    <div
      className="flex column justify-content-center align-items-center"
      style={{ gap: '1rem' }}
    >
      <div className="title-2">{value}</div>
      <div className="text-4">{label}</div>
    </div>
  )
}
