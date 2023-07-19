import React from 'react'
import Image from "next/image"
import Avatar, { IAvatar } from './Avatar'
import { BiEdit } from 'react-icons/bi'

interface IClientsRow {
    role: string
    user: IAvatar
    serviceType: string
    contractValue: number
    startDate: string
    endDate: string
    Operatives: IAvatar[]
}



export default function ClientsRow(props: IClientsRow) {
    const { role, user, serviceType, contractValue, endDate, startDate, Operatives } = props
    return (
        <div className='flex justify-between bg-dark p-2 items-center text-white'>
            <div className="flex gap-2 items-center">
                <Avatar src={user.src} name={user.name} />
                <p>{user.name}</p>
            </div>
            <p>{serviceType}</p>
            <p>{contractValue}</p>
            <p>{startDate}</p>
            <p>{endDate}</p>
            <div className="flex">
                {
                    Operatives.slice(0, 1).map(i => <Avatar className='-m-2.5' src={i.src} name={i.name} />)
                }
                <Avatar className='-m-2.5' src={""} name={(Operatives.length - 1).toString()} />

            </div>
            <button className='bg-primary flex gap-2 rounded items-center p-2 text-sm'>
                Edit  <BiEdit />
            </button>

        </div>
    )
}
