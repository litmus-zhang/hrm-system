import Image from 'next/image'
import React from 'react'


export interface IAvatar {
    src: string
    name: string
    variant?: "sm" | "md" | "lg"
    className?: string
}
export default function Avatar(props: IAvatar) {
    const Shortener = (fullname: string) => {
        const nameArray = fullname.split(' ');
        if (nameArray.length <= 1) {
            return `+${nameArray[0][0]}`
        }
        const firstLetterFirstName = nameArray[0][0];

        const firstLetterLastName = nameArray[1][0];
        return `${firstLetterFirstName}${firstLetterLastName}`;

    }
    return (
        <div className={`${props.className} w-10 h-10 bg-gray-200 rounded-full overflow-hidden text-gray-800`}>
            <Image className='w-auto h-auto z-10' src={props.src} width={40} height={40} alt='user-avatar' />
            <p className='flex justify-center -z-10 items-center text-xl '>
                {Shortener(props.name)}
            </p>
        </div>
    )
}
