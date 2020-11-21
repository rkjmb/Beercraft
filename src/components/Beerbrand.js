import React from 'react'

const Beerbrand = ({ src, berrBrand: { abv, ibu, name, style, ounces } }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid' }}>
            <div>
                <img className='image1' src={src} alt={'Beer image'} />
            </div>
            <div style={{ backgroundColor: '#1976D2', color: 'white' }}>{name}</div>
            <span>ABV:{abv ? abv : ' N/A'}</span>
            <span>IBU:{ibu ? ibu : ' N/A'}</span>
            <span>STYLE:{style ? style : ' N/A'}</span>
            <span>OUNCES:{ounces ? ounces : ' N/A'}</span>
        </div >
    )
}

export default Beerbrand
