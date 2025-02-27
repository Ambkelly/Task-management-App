import { Line } from "react-chartjs-2";
import { useState } from "react";
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Define lineChartData
const lineChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"], // X-axis labels
  datasets: [
    {
      label: "My First dataset", // Label for the dataset
      data: [65, 59, 80, 81, 56, 55, 40], // Y-axis data
      fill: false,
      borderColor: "rgb(75, 192, 192)", // Line color
      tension: 0.1, // Smoothness of the line
    },
  ],
};

// Define chart options
const options = {
  responsive: true, // Make the chart responsive
  plugins: {
    legend: {
      position: "top", // Position of the legend
    },
    title: {
      display: true,
      text: "Monthly Progress", // Chart title
    },
  },
};

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [notification, setNotification] = useState();

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  const handleNotification = () => {
    setNotification("You have a new notification");
    setTimeout(() => {
      setNotification("");
    }, 2000);
  };

  return (
    <div className="General_container">
      <aside className="aside_container">
        <ul>
          <button className="first_img" onClick={handleNotification}><img src="./first.png" alt="First" /></button>
          <li className="second_img"><img src="./second.png" alt="Second" /></li>
          <li className="third_img"><img src="./third.png" alt="Third" /></li>
          <li className="fouth_img"><img src="./fouth.png" alt="Fourth" /></li>
          <li className="sixth_img"><img src="./sixth.png" alt="Sixth" /></li>
          <li className="seventh_img"><img src="./seventh.png" alt="Seventh" /></li>
        </ul>
      </aside>
      <main className="main_container">
        <div className="notification_container">
          {notification && <div className="notification">{notification}</div>}
        </div>
        <div className="Search_btn">
          <div className="search_wrap">
            <input type="text" placeholder="Search" />
            <img src="search.png" alt="Search button" className="search_btn" />
          </div>
        </div>
        <div className="today_task_container">
          <div className="today_task_content">
            <h1>Today Task</h1>
            <p>Check your daily tasks and schedules</p>
            <button>Today’s schedule</button>
          </div>
          <div className="today_task_img">
            <img src="Time management-amico 1.png" alt="Time management image" />
          </div>
        </div>
        <div className="Second_row">
          <div className="columns first_col">
            <p className="title">Nov 2, 2022</p>
            <h3>{tasks.length === 0 ? "First Task" : tasks[0]}</h3>
            <p>Designing</p>
            <div className="outter_progress">
              <div className="inner_progess"></div>
            </div>
            <div className="progress_text">
              <span>Progress</span>
              <span>90%</span>
            </div>
            <div className="last_section">
              <span className="Image_span">
                <img src="Ellipse 12.png" alt="Ellipse" className="img_one" />
                <img src="Ellipse 12.png" alt="Ellipse" className="img_two" />
                <img src="Group 1000002308.png" alt="Group img" className="img_three" />
              </span>
              <span className="days_left">3 days left</span>
            </div>
          </div>
          <div className="columns first_col second_col">
            <p className="title">Nov 26, 2022</p>
            <h3>{tasks.length === 0 ? "Second Task" : tasks[1]}</h3>
            <p>Shopping</p>
            <div className="outter_progress">
              <div className="inner_progess inner_progess_two"></div>
            </div>
            <div className="progress_text">
              <span>Progress</span>
              <span>33%</span>
            </div>
            <div className="last_section">
              <span className="Image_span">
                <img src="Ellipse 12.png" alt="Ellipse" className="img_one" />
                <img src="Ellipse 12.png" alt="Ellipse" className="img_two" />
                <img src="Group 2 (1).png" alt="Group img" className="img_three" />
              </span>
              <span className="days_left days_left_two">3 days left</span>
            </div>
          </div>
          <div className="columns first_col">
            <p className="title">Nov 2, 2022</p>
            <h3>{tasks.length === 0 ? "Third Task" : tasks[2]}</h3>
            <p>Designing</p>
            <div className="outter_progress">
              <div className="inner_progess inner_progess_three"></div>
            </div>
            <div className="progress_text progress_tex_three">
              <span>Progress</span>
              <span>75%</span>
            </div>
            <div className="last_section">
              <span className="Image_span">
                <img src="Ellipse 12.png" alt="Ellipse" className="img_one" />
                <img src="Ellipse 12.png" alt="Ellipse" className="img_two" />
                <img src="Group 3.png" alt="Group img" className="img_three" />
              </span>
              <span className="days_left days_left_three">3 days left</span>
            </div>
          </div>
        </div>
        <div className="Last_section">
          {/* Graph section */}
          <div className="main_graph_section">
            <Line options={options} data={lineChartData} className="line" />
          </div>
          {/* Task section */}
          <div className="task">
            <h1>Current Tasks</h1>
            <div className="input_div">
              <input
                type="text"
                value={newTask}
                placeholder="Enter a task..."
                onChange={handleInputChange}
              />
              <button className="add_btn" onClick={addTask}>Add</button>
            </div>
            <ol>
              {tasks.map((task, index) => (
                <li key={index}>
                  <span className="text">{task}</span>
                  <button className="delete_btn" onClick={() => deleteTask(index)}>Delete</button>
                  <button className="move_btn" onClick={() => moveTaskUp(index)}>👆</button>
                  <button className="move_btn" onClick={() => moveTaskDown(index)}>👇</button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </main>
      <div className="Right_aside_container">
        <div className="current_task">
          <div className="profile">
            <span>
              <img src="Group 21 2.png" alt="Profile_icon" />
            </span>
            <span className="profile_text">
              <h3>Rimsha Khan</h3>
              <p>UI/UX Designer</p>
            </span>
          </div>
          <div className="divider">
            <button className="divider"></button>
          </div>
          <div className="Add_task">
            <img src="Design community-pana 1.png" alt="Design community image" />
            <h3>Your Task</h3>
            <p>View your current Task so as to stay updated</p>
            <div className="Task_display">
              <p>{tasks.length === 0 ? "Current Task" : tasks[0]}</p>
            </div>
          </div>
        </div>
        <div className="calender">
          <img src="Calendar.png" alt="Calendar" />
        </div>
      </div>
    </div>
  );
};

export default Home;