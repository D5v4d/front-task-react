interface NumericInputProps {
  id?: string
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  placeholder?: string
  minWidthPx?: number
  className?: string
}

const MIN_WIDTH_PX = 72;

function formatWithSpaces(value: string): string {
  if (!value) return ''
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

function toDigits(value: string): string {
  return value.replace(/\D/g, '')
}


export default function NumericInput({
  id,
  value,
  onChange,
  onBlur,
  placeholder,
  minWidthPx = MIN_WIDTH_PX,
  className,
}: NumericInputProps) {
  const normalizedValue = toDigits(value)
  const formattedValue = formatWithSpaces(normalizedValue)
  const inputSize = Math.max(1, formattedValue.length || 1)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(toDigits(e.target.value))
  }

  return (
    <input
      id={id}
      type="text"
      inputMode="numeric"
      autoComplete="off"
      size={inputSize}
      value={formattedValue}
      onChange={handleChange}
      onBlur={onBlur}
      placeholder={placeholder}
      className={className}
      style={{ minWidth: `${minWidthPx}px` }}
    />
  )
}
