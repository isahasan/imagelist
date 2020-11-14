import React from 'react'


class Search extends React.Component{
    state={
        value: 'beautiful image'
    }
    onChangeHandler=(event)=>{
        this.setState({value: event.target.value})
    }
    onFormsubmit=(event)=>{
        event.preventDefault();
        this.props.onSearchSubmit(this.state.value)
    }
    render(){
        return(
            <div className='ui segment'>
                <form onSubmit={this.onFormsubmit} className='ui form' >
                    <div className='field' >
                        <div className='ui massive icon input' >
                            <input type='text' placeholder='Search...' onChange={this.onChangeHandler}/>
                            <i className='search icon' onClick = {this.onFormsubmit} ></i>
                        </div>
                    </div>  
                </form>
            </div>
        )
    }
}
export default Search
