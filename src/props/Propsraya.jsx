import React,{ Component } from 'react';
import './propsraya.css';
const Propsraya = ({ data }) => {
    return(
        <div>
            {
                data.map((param,i) => {
                    return(
                        <div key={i} className="layout">
                            <div className="gambar">
                                <img className="ga" height="150px" width="230px" src={param.thumbnail} />
                                <h3>{param.title}</h3>
                                    <h4>{param.pubDate}</h4>
                                <h2>{param.author}</h2>
                            </div>
                        </div>
                    )
            })
            }
        </div>
    )
}

export default Propsraya;
