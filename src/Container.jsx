import { Line } from "react-chartjs-2";
import { useState } from "react";
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Define initial lineChartData
const initialLineChartData = {
  labels: ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5", "Task 6", "Task 7"], // X-axis labels (tasks)
  datasets: [
    {
      label: "Task Progress", // Label for the dataset
      data: [90, 33, 75, 0, 0, 0, 0], // Initial progress values (Y-axis data)
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
      text: "Task Progress", // Chart title
    },
  },
};

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [notification, setNotification] = useState("");
  const [progress, setProgress] = useState([90, 33, 75, 0, 0, 0, 0]); // Initial progress values for each task
  const [lineChartData, setLineChartData] = useState(initialLineChartData);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [searchResults, setSearchResults] = useState([]); // State for search results
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  // Handle input change for new task
  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  // Add a new task
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setProgress((p) => [...p, 0]); // Initialize progress for the new task
      setNewTask("");

      // Update the graph data
      const updatedLineChartData = {
        ...lineChartData,
        labels: [...lineChartData.labels, `Task ${tasks.length + 1}`], // Add a new label
        datasets: [
          {
            ...lineChartData.datasets[0],
            data: [...lineChartData.datasets[0].data, 0], // Add a new progress value
          },
        ],
      };
      setLineChartData(updatedLineChartData);
    }
  }

  // Delete a task
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    const updatedProgress = progress.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setProgress(updatedProgress);

    // Update the graph data
    const updatedLineChartData = {
      ...lineChartData,
      labels: lineChartData.labels.filter((_, i) => i !== index), // Remove the corresponding label
      datasets: [
        {
          ...lineChartData.datasets[0],
          data: updatedProgress, // Update the progress data
        },
      ],
    };
    setLineChartData(updatedLineChartData);
  }

  // Move a task up
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      const updatedProgress = [...progress];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      [updatedProgress[index], updatedProgress[index - 1]] = [updatedProgress[index - 1], updatedProgress[index]];
      setTasks(updatedTasks);
      setProgress(updatedProgress);

      // Update the graph data
      const updatedLineChartData = {
        ...lineChartData,
        datasets: [
          {
            ...lineChartData.datasets[0],
            data: updatedProgress, // Update the progress data
          },
        ],
      };
      setLineChartData(updatedLineChartData);
    }
  }

  // Move a task down
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      const updatedProgress = [...progress];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      [updatedProgress[index], updatedProgress[index + 1]] = [updatedProgress[index + 1], updatedProgress[index]];
      setTasks(updatedTasks);
      setProgress(updatedProgress);

      // Update the graph data
      const updatedLineChartData = {
        ...lineChartData,
        datasets: [
          {
            ...lineChartData.datasets[0],
            data: updatedProgress, // Update the progress data
          },
        ],
      };
      setLineChartData(updatedLineChartData);
    }
  }

  // Handle notification
  const handleNotification = () => {
    setNotification(alert("This feature is still being worked on. Stay tuned!"));

    setTimeout(() => {
      setNotification(""); // Clear notification after 2 seconds
    }, 2000);
  };

  // Update progress for a specific task
  const updateProgress = (index, newProgress) => {
    const updatedProgress = [...progress];
    updatedProgress[index] = newProgress;
    setProgress(updatedProgress);

    // Update the graph data
    const updatedLineChartData = {
      ...lineChartData,
      datasets: [
        {
          ...lineChartData.datasets[0],
          data: updatedProgress, // Sync the graph data with the progress values
        },
      ],
    };
    setLineChartData(updatedLineChartData);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search button click
  const handleSearch = () => {
    const results = tasks.filter((task) =>
      task.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
    setShowPopup(true); // Show the popup
  };

  // Close the popup
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="General_container">
      <aside className="aside_container">
        <ul>
          <button className="first_img" onClick={handleNotification}>
            <img src="./first.png" alt="First" />
          </button>
          <button className="second_img" onClick={handleNotification}>
            <img src="./second.png" alt="Second" />
          </button>
          <button className="third_img" onClick={handleNotification}>
            <img src="./third.png" alt="Third" />
          </button>
          <button className="fouth_img" onClick={handleNotification}>
            <img src="./fouth.png" alt="Fourth" />
          </button>
          <button className="sixth_img" onClick={handleNotification}>
            <img src="./sixth.png" alt="Sixth" />
          </button>
          <button className="seventh_img" onClick={handleNotification}>
            <img src="./seventh.png" alt="Seventh" />
          </button>
        </ul>
      </aside>
      <main className="main_container">
        {/* Notification  */}
        <div className="notification_container">
          <p>{notification}</p>
          {notification && <div className="notification"></div>}
        </div>
        <div className="Search_btn">
          <div className="search_wrap">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="search_btn" onClick={handleSearch}>
              <img src="search.png" alt="Search button" />
            </button>
          </div>
        </div>
        {/* Popup for search results */}
        {showPopup && (
          <div className="popup">
            <div className="popup_content">
              <button className="close_btn" onClick={closePopup}>
                &times;
              </button>
              {searchResults.length > 0 ? (
                <ul>
                  {searchResults.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              ) : (
                <p>No such task found.</p>
              )}
            </div>
          </div>
        )}
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
              <div className="inner_progess" style={{ width: `${progress[0]}%` }}></div>
            </div>
            <div className="progress_text">
              <span>Progress</span>
              <span>{progress[0]}%</span>
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
              <div className="inner_progess inner_progess_two" style={{ width: `${progress[1]}%` }}></div>
            </div>
            <div className="progress_text">
              <span>Progress</span>
              <span>{progress[1]}%</span>
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
              <div className="inner_progess inner_progess_three" style={{ width: `${progress[2]}%` }}></div>
            </div>
            <div className="progress_text progress_tex_three">
              <span>Progress</span>
              <span>{progress[2]}%</span>
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
                  <input
                    type="number"
                    value={progress[index]}
                    onChange={(e) => updateProgress(index, parseInt(e.target.value))}
                    min="0"
                    max="100"
                  />
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