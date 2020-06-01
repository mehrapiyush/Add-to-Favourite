import React, {Component} from 'react';
import {Button} from 'antd';

class List_user extends Component {
  render() {
    let style = {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      padding: "1rem",
      gridGap: "1rem 1rem"
    };

    return (
      <div>
        <ul style={style}>
          {this.props.list.map(user => {
            if(user._links.avatar.href && user.first_name && user.last_name ){
                return (
                <li key={user.id}>
                  <div>
                    <img src={user._links.avatar.href} />
                  </div>
                  <div>
                    <p>
                      {user.first_name} {user.last_name}
                    </p>
                  </div>
                  <Button onClick={() => this.props.addFavorite(user)}>Add to Favourites</Button>
                </li>
              );
            }
          })
          }   
        </ul>
      </div>
    );
  }
}
export default List_user;