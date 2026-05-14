import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '@/store'
import NumericInput from '@/components/NumericInput'

export default function Settings() {
  const setMinimumAgeInMonths = useStore((state) => state.setMinimumAgeInMonths)
  const [minimumAgeInput, setMinimumAgeInput] = useState('')

  const handleMinimumAgeChange = (nextValue: string) => {
    setMinimumAgeInput(nextValue)
    if (nextValue !== '') {
      setMinimumAgeInMonths(Number(nextValue))
    }
  }

  return (
    <div className="flex w-[397px] flex-col gap-4">
      <Link to="/" className="text-violet-600 hover:underline text-sm">
        &larr; Back
      </Link>

      <h1 className="text-xl font-bold text-gray-700">Settings</h1>

      <div>
        <label
          htmlFor="min-age-input"
          className="block text-sm font-bold tracking-wide text-gray-700"
        >
          MINIMUM AGE
        </label>
        <div className="flex items-center gap-2">
          <NumericInput
            id="min-age-input"
            value={minimumAgeInput}
            onChange={handleMinimumAgeChange}
            onBlur={() => {
              if (minimumAgeInput === '') {
                setMinimumAgeInMonths(0)
              }
            }}
            className={`border rounded-lg px-3 py-2 text-2xl outline-none ${minimumAgeInput ? 'border-[#906FEE] border-2' : 'border-[#CFCADF]'}`}
            placeholder="0"
          />
          <span className="text-gray-600">months</span>
        </div>
      </div>
    </div>
  )
}
