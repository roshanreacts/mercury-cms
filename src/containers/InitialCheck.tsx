"use client"
import { checkTokenExpiry, getLoggedInUserRoleFromCookie } from '@/utils/cookie'
import { redirect } from 'next/navigation'
import React, { useEffect } from 'react'

const InitialCheck = () => {

    useEffect(()=>{
        checkSession() 
    })

    const checkSession = () => {
        const expired = checkTokenExpiry()
        if (expired) {
            redirect('/admin/login');
        }
    }

    return (
        <div>

        </div>
    )
}

export default InitialCheck