import React, { Component } from 'react';
import "./style.css";


class App extends Component {
    constructor(props){
        super(props)
        this.state={
            imageUrl:"",
            imageUrlArray:[
                "https://images.unsplash.com/photo-1588612005960-a382b1eca714?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMzM3M30",
                "https://images.unsplash.com/photo-1590302076869-ed1aadb7a2a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMzM3M30",
                "https://images.unsplash.com/photo-1590314760511-8de4e2a6bb63?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMzM3M30",
                "https://images.unsplash.com/photo-1590311329845-07cbc2417909?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMzM3M30",
                "https://images.unsplash.com/photo-1590233183626-b14c6b5de8e9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMzM3M30",
                "https://images.unsplash.com/photo-1588553543501-eac23a7b95ce?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMzM3M30",
                "https://images.unsplash.com/photo-1590290801258-0aaf024d6efb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMzM3M30",
                "https://images.unsplash.com/photo-1590305613919-012298aab3a2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMzM3M30",
                "https://images.unsplash.com/photo-1590164797091-0705160d3b97?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMzM3M30",
                "https://images.unsplash.com/photo-1589987411282-e1b55fef1791?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMzM3M30",
                "https://images.unsplash.com/photo-1587613991519-d15d73f62b44?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMzM3M30",
                "https://images.unsplash.com/photo-1590343712722-056c088d6b9b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMzM3M30",
                "https://images.unsplash.com/photo-1590308272950-bac037a11cd8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMzM3M30",
                "https://images.unsplash.com/photo-1590275036297-40f070de4b1c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMzM3M30",
                "https://images.unsplash.com/photo-1590129683941-f5520c6e2a09?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMzM3M30",
                "https://images.unsplash.com/photo-1590261697302-507f1be951c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMzM3M30",
                "https://images.unsplash.com/photo-1590334280707-9d5e0f60a539?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMzM3M30",
                "https://images.unsplash.com/photo-1590345663334-145e2bd442ea?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMzM3M30",
                "https://images.unsplash.com/photo-1590350033499-0c532bb4c9f2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMzM3M30",
                "https://images.unsplash.com/photo-1590274382383-25b0c89192e8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMzM3M30"
            ],
            showModal:false,
            popImageUrl:""
        }
    }
    
    render(){
        let imageUrlArray = this.state.imageUrlArray;
        const images = imageUrlArray.map((url,index)=>{
            return(
                <img 
                className="singleImage"
                src={url}
                key={index}
                
                />
            )
        })
        return (
        <div className="Images">
            
            {images}
        </div>
        );
  }
}

export default App;