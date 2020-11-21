import React from 'react'

const Beerbrand = ({ src, berrBrand: { abv, ibu, name, style, ounces } }) => {
    return (
        <div className='beerbrand'>
            <div className='beerbrand--image'>
                <img className='image1' src={src} alt={'Beer image'} />
            </div>
            <div className="beerbrand-info">
                <div className="beerbrand-name">{name}</div>
                <div className="beerbrand-subInfo">
                    <div><span className='beerbrand-label'>ABV</span> {abv ? abv : ' N/A'}</div>
                    <div><span className='beerbrand-label'>IBU</span> {ibu ? ibu : ' N/A'}</div>
                    <div><span className='beerbrand-label'>STYLE</span> {style ? style : ' N/A'}</div>
                    <div><span className='beerbrand-label'>OUNCES</span> {ounces ? ounces : ' N/A'}</div>
                </div>
            </div>
        </div >
    )
}

export default Beerbrand
