import React from "react";
import Advert from "../components/Advert";
import AddForm from "../components/AddForm";
import AddAdvert from "../components/AddAdvert";
import Layout from "../components/Layout";
import Popup from "../components/Popup";
import * as s from "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    let adverts = {};
    if (localStorage.getItem("SAdverts")) {
      adverts = JSON.parse(localStorage.getItem("SAdverts"));
    }

    this.state = {
      data: {
        adverts: adverts
      },
      isPopupShown: false,
      currentAvert: { id: "", title: "", text: "", phone: "" }
    };
  }

  setLocalStorage() {
    localStorage.setItem("SAdverts", JSON.stringify(this.state.data.adverts));
  }

  makeId() {
    return `${Math.random()
      .toString(16)
      .slice(2)}${new Date().getTime()}`;
  }

  submitForm(formData) {
    let id = formData.get("id");
    if (!formData) {
      return null;
    }

    const { data } = this.state;
    const { adverts } = data;
    if (!id) {
      id = this.makeId();
    }

    adverts[id] = {
      id: id,
      title: formData.get("title"),
      text: formData.get("text"),
      phone: formData.get("phone")
    };

    this.setState(
      {
        data: {
          adverts
        },
        isPopupShown: false,
        currentAvert: { id: "", title: "", text: "", phone: "" }
      },
      () => {
        this.setLocalStorage();
      }
    );
  }

  removeAdvert(id) {
    if (!id) {
      return null;
    }

    const { data } = this.state;
    const { adverts } = data;
    delete adverts[id];

    this.setState(
      {
        data: {
          adverts
        }
      },
      () => {
        this.setLocalStorage();
      }
    );
  }

  editAdvert(id) {
    const initData = this.state.data && this.state.data.adverts[id];
    this.setState({
      isPopupShown: true,
      currentAvert: {
        id: id,
        title: initData.title,
        text: initData.text,
        phone: initData.phone
      }
    });
  }

  onClickAddAdvert() {
    this.setState({ isPopupShown: true });
  }

  renderFormPopup() {
    if (this.state.isPopupShown) {
      return (
        <Popup>
          <AddForm
            submitCallback={formData => {
              this.submitForm(formData);
            }}
            data={this.state.currentAvert}
          />
        </Popup>
      );
    }
  }

  render() {
    const { data } = this.state;
    const { adverts } = data;

    if (!data) {
      return null;
    }

    return (
      <div className={s.root}>
        <h1>Доска объявлений</h1>
        <Layout>
          <AddAdvert
            onClickAddAdvert={() => {
              this.onClickAddAdvert();
            }}
          />
          {Object.keys(data.adverts).map((item, index) => {
            return (
              <Advert
                clickDeleteCallback={() => {
                  this.removeAdvert(item);
                }}
                clickEditAdvert={() => {
                  this.editAdvert(item);
                }}
                advert={adverts[item]}
                key={index}
              />
            );
          })}
          {this.renderFormPopup()}
        </Layout>
      </div>
    );
  }
}

export default App;
