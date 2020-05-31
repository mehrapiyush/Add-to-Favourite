import React,{ Component }  from 'react';
import { Tabs } from 'antd';
import List_user from './List_user';
import Fav from './Fav';
import axios from 'axios';
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
class User extends Component{
    state = {
        list: [],
        favorites: []
      };
    
      addFavorite = favorite => {
        const { favorites } = this.state;
    
        if (!favorites.some(alreadyFavorite => alreadyFavorite.id == favorite.id)) {
          this.setState({
            favorites: [...this.state.favorites, favorite]
          });
        }
      };
    
      getList = async () => {
        const api =
          "https://gorest.co.in/public-api/users?_format=json&access-token=3qIi1MDfD-GXqOSwEHHLH73Y3UitdaFKyVm_";
    
        await axios
          .get(api)
          .then(response => {
            this.setState({
              list: response.data.result
            });
          })
          .catch(err => {
            console.log(err);
          });
      };
    
      componentDidMount() {
        this.getList();
      }
    render(){
        return(
            <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Users" key="1">
                <List_user list = {this.state.list} addFavorite={this.addFavorite}/>
            </TabPane>
            <TabPane tab="Favourites" key="2">
            <Fav favorites = {this.state.favorites} />
            </TabPane>
            </Tabs>
        )
    }
 }
export default User;