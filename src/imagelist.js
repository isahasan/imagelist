import React from 'react'
import './imagelist.css'

class ImageList extends React.Component{

   
    render(){
        const {Images}= this.props
        return(
        <div>
            <h2> Total: {Images.length} images</h2>
            <div className="row">
                {Images.map(el=>
                    <a className="column" href={el.webformatURL}  key={el.id}>
                        <img className='gallery img' src={el.webformatURL} key={el.id} alt={el.tags}/>
                    </a>
                    )}
            </div>
        </div> 
        )
    }
}
    export default ImageList