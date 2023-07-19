import React, { ReactNode } from 'react'
import { BiSolidUpArrow, BiSolidDownArrow } from 'react-icons/bi'

interface IStats {
    title: string
    icon: ReactNode
    current: number
    total: number
    rate: number
    loading?: boolean
}

export default function StatsCard(stats: IStats) {
    const { title, rate, icon, current, total, loading } = stats
    return (
        <div className='bg-dark p-4 text-white w-[250px] rounded-lg'>
            <div className="flex justify-between">
                <p className='text-gray-400 text-sm'>{title}</p>
                <div className="text-secondary">{icon}</div>
            </div>
            <div className="pt-2">
                <h1 className='text-3xl font-bold'>{current}</h1>
                <div className="flex gap-1 my-2 text-sm">
                    <div className={`flex gap-1 items-center ${rate > 0 ? "text-green-500" : "text-red-500"}`}>{rate}% {rate > 0 ? <BiSolidUpArrow /> : <BiSolidDownArrow />}</div>
                    <p className='text-gray-400'> from {total}</p>
                </div>
            </div>

        </div>
    )
}
