import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import NumericInput from '@/components/NumericInput'
import { useStore } from '@/store'

export default function PersonEdit() {
  const { id } = useParams<{ id: string }>()
  const person = useStore((state) => state.people.find((p) => p.id === Number(id)))
  const updatePersonAge = useStore((state) => state.updatePersonAge)
  const [hoursInput, setHoursInput] = useState(person ? String(person.ageInHours) : '')

  const handleHoursChange = (nextValue: string) => {
    setHoursInput(nextValue)

    if (!person) return

    if (nextValue !== '') {
      updatePersonAge(person.id, Number(nextValue))
    }
  }

  if (!person) {
    return (
      <div>
        <p className="text-gray-600">Person not found</p>
        <Link to="/" className="text-violet-600 hover:underline text-sm">
          Back to list
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <Link to="/" className="text-violet-600 hover:underline text-sm">
        &larr; Back
      </Link>

      <div className="flex items-center gap-3">
        <div
          className={`${hoursInput ? 'p-0.5 rounded-full border-2 border-violet-500' : 'p-0.75'}`}
        >
          <img src="/photo.png" alt={person.name} className="rounded-full object-cover " />
        </div>

        <div>
          <label
            htmlFor="hours-input"
            className={`block text-sm font-bold tracking-wide ${hoursInput ? 'text-[#3D06D7]' : 'text-[#1E0E4C]'}`}
          >
            {person.name.toUpperCase()} IS
          </label>
          <div className="flex items-center gap-2">
            <NumericInput
              id="hours-input"
              value={hoursInput}
              onChange={handleHoursChange}
              placeholder="0"
              minWidthPx={72}
              className={`border rounded-lg px-3 py-2 text-2xl outline-none ${hoursInput ? 'border-[#906FEE] border-2' : 'border-[#CFCADF] '}`}
            />
            <span className="text-[#1E0E4C] text-xl">hours old</span>
          </div>
        </div>
      </div>
    </div>
  )
}
