import React, {Component} from 'react'
import { render } from '@testing-library/react'

class DropdownBar extends Component {
    state = {
        titleKeyword:""
    }

    handleChange = (event) => {
        let {name, value} = event.target
        this.setState({
            [name]:value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTodo(this.state)
    }

    

    render(){
        return (
            <div className="dropdown">
                <span className="filter-search">Filter & Search</span>
                <div className="dropdown-content">
                    <p className="region"> Region </p>
                        <button id="demacia-button" onClick={this.props.filterByRegion}>Dermcia</button>
                        <button id="ionia-button">Ionia</button>
                        <button id="freljord-button">Freljord</button>
                        <button id="piltoverZaun-button">Piltover & Zaun</button>
                        <button id="noxus-button">Noxus</button>
                        <button id="shadow-isles-button">Shadow Isles</button>
                        <button className="clear-filter">Clear</button>

                        <p className="mana-cost">Mana Cost</p>
                        <button id="cost-0" >Cost 0</button>
                        <button id="cost-1" >Cost 1</button>
                        <button id="cost-2" >Cost 2</button>
                        <button id="cost-3" >Cost 3</button>
                        <button id="cost-4" >Cost 4</button>
                        <button id="cost-5" >Cost 5</button>
                        <button id="cost-6" >Cost 6</button>
                        <button id="cost-7" >Cost 7</button>
                        <button id="cost-8" >Cost 8</button>
                        <button id="cost-9" >Cost 9</button>
                        <button className="clear-filter-2">Clear</button>

                        <label className="search">Search</label>
                        
                        <form onSubmit={this.handleSubmit} className='search'>
                            <input name='title' value={this.state.title} onChange={this.handleChange}/>
                            <input type='submit'/>
                        </form>
                </div>
            </div>
        )
    }

    

}
    

export default DropdownBar