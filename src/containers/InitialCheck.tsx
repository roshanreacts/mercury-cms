"use client"
import { checkTokenExpiry } from '@/utils/cookie'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const InitialCheck = () => {
    const url = usePathname();
    useEffect(() => {
        if (!(url.split('/')[1] && url.split('/')[1] === 'login'))
            checkSession()
    })
    const router = useRouter();

    const checkSession = () => {
        const expired = checkTokenExpiry()
        if (expired) {
            router.replace('/admin/login');
        }
    }

    return (
        <div>

        </div>
    )
}

export default InitialCheck