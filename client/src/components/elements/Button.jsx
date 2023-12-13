import React from 'react'

const Button = ({ contained, outlined, header, children }) => {
    return (
        <div>
            {(header) &&
                <button className='bg-primary-normal font-bold text-slate-50 rounded-full px-6 py-2 hover:bg-primary-dark'>{children}</button>
            }

            {(contained) &&
                <button className='bg-secondary text-base font-medium text-slate-50 rounded-md px-4 py-2 hover:bg-slate-600'>{children}</button>
            }

            {(outlined) &&
                <button className='border-solid border-2 bg-slate-300 text-secondary hover: {text-white bg-light-gray}'>{children}</button>
            }
        </div>
    )
}

export default Button;