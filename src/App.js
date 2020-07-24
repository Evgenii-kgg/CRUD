import React from "react";
import "./App.css";

import Form from "./Form";
import List from "./List";
import { netWorkService } from "./api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      itemList: [],
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  componentDidMount() {
    this.getTasks();
  }

  getTasks = () => {
    netWorkService({ url: "notes", method: "GET" }).then((response) => {
      console.log("fsfs", response);

      this.setState({
        itemList: [...response],
      });
    });
  };

  onSubmitAdd = async () => {
    await netWorkService({
      url: "notes",
      method: "POST",
      body: {
        // id: 1,
        name: this.state.name,
      },
    }).then((response) => {
      // this.addTask(response);
      this.getTasks()
    });
  };

  addTask = (note) => {
    this.state.itemList = [...this.state.itemList, note];
  };

  // onSubmitDelete = async (noteId) => {
  //   this.deleteTask(noteId);
  // };

  deleteTask = async (noteId) => {
    return netWorkService({ url: `notes/${noteId}`, method: "DELETE" }).then(
      (response) => {
        //console.log(response)
        this.setState((prevState) => ({
          itemList: prevState.itemList?.filter((item) => item.id !== noteId),
        }))
      }
    );
  };

  handelAction = ({ actionType, data }) => {
    console.log(actionType, data);
    switch (actionType) {
      case "delete":
        return this.deleteTask(data.id)
        
    }
    // return this.setState((prevState) => ({
    //   itemList: prevState.itemList?.filter((item) => item.id !== data.id),
    // }));
  };

  // idGen = () => {
  //   if (!this.state.itemList.length) return 1;
  //   const sortItems = this.state.itemList.sort((a, b) =>
  //     a.id < b.id ? 1 : -1
  //   );
  //   const lastId = sortItems[0].id;
  //   console.log(sortItems, lastId);
  //   return lastId + 1;
  // };

  // clearData = { content: "" };

  // addItem = () => {
  //   if (!this.state.data && !this.state.content) return;
  //   const findItem = this.state.itemList.find(
  //     (item) => item.data === this.state.data
  //   );

  //   if (findItem) {
  //     return this.editItem({ findItem });
  //   }
  //   const id = this.idGen();
  //   this.setState({
  //     itemList: [
  //       ...this.state.itemList,
  //       {
  //         id,
  //         content: this.state.content,
  //       },
  //     ],
  //     ...this.clearData,
  //   });
  // };

  render() {
    return (
      <div className="App">
        <div>
          <Form
            Add={this.onSubmitAdd}
            handleChange={this.handleChange}
            name={this.state.name}
          />
          <List
            items={this.state.itemList}
            name={this.state.name}
            action={this.handelAction}
          />
        </div>
      </div>
    );
  }
}

export default App;
