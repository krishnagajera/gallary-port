import {React ,Component} from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';


class Directory extends Component{
    constructor(){
        super();
        this.state = {
            sections:[{
                title:'hats',
                imageurl:'https://i.ibb.co/cvpntL1/hats.png',
                id:1,
                linkurl:'hats'
            },
            {
                title:'jackets',
                imageurl:'https://i.ibb.co/px2tCc3/jackets.png',
                id:2,
                linkurl:''
            },
            {
                title:'sneakers',
                imageurl:'https://i.ibb.co/0jqHpnp/sneakers.png',
                id:3,
                linkurl:''
            },
            {
                title:'womens',
                imageurl:'https://i.ibb.co/GCCdy8t/womens.png',
                id:4,
                size:'large',
                linkurl:''
            },
            {
                title:'mens',
                imageurl:'https://i.ibb.co/R70vBrQ/men.png',
                id:5,
                size:'large',
                linkurl:''
            }]
        }
    }



render() {
    return(
    <div  className='directory-menu'>
    {
    this.state.sections.map(({id,...otherSectionprops}) =>(
        <MenuItem key={id}  {...otherSectionprops}/>
    ))
 
    }
    </div>
    );
    }
}
export default Directory;