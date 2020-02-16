import React from 'react';
import { data } from './component/Data';
import Propsraya from './props/Propsraya';
import './App.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { datas:[] }
    }
    componentDidMount(){
        this.setState({ datas:data })
    }
  render(){
  return (
      <div>
          <h1 className="per">Kumpulan Berita Viral</h1>
          <h2 className="ked">Di Indonesia</h2>
          <div className="container">
              <h3>HOME</h3>
      </div>
           <Propsraya data={this.state.datas} />
      </div>
  );
}
}

export default App;
