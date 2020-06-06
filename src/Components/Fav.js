import React , {Component} from 'react';


class Fav extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let style = {
      display: "grid",
      gridTemplateColumns : "repeat(auto-fill, minmax(400px,1fr))",
      padding: "20px",
      gridGap: "20px 20px",
    };
    const { favorites } = this.props;
    return (
      <div>
        <ul style = {style}>
          {favorites.map(user => {
            return (
              <li key={user.id}>
                <div>
                  <img alt="Not Displayed" src={user._links.avatar.href} />
                </div>

                <div className="userInfo">
                  <p>
                    {user.first_name} {user.last_name}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Fav;

