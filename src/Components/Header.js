import React from 'react'

export default function Header({name,message}){

    return <header className="header">
        <h1 className="header__title">Bonjour <span className="header__name">{name}</span></h1>
        <div className="header__message">{message}</div>
    </header>
}
