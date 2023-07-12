import {useState} from "react";
import FormTask from "./components/FormTask";
import ItemTask from "./components/ItemTask";

function App() {
	const [tasks, setTasks] = useState([]);

	function addTask(newTask) {
		setTasks([...tasks, {
			id: Date.now(),
			text: newTask.text,
			checked: false
		}]);
	}

	function delTask(task) {
		setTasks(tasks.filter((item) => item.id !== task.id));
	}

	function doneTask(task) {
		setTasks([...tasks.filter((item) => item.id !== task.id), {...task, checked: task.checked !== true || false}])
	}

	function cleanDoneTasks() {
		setTasks(tasks.filter((item) => item.checked !== true));
	}

	return (
		<>
			<div className="container">
				<div className="display-4 mb-2">ToDo приложение</div>
				<div className="h4 mb-5">список задач на сегодня</div>

				<div className="card mb-4">
					{tasks.length > 0
						?
						<ul className="list-group list-group-flush">
							{tasks.map((item, i) => (
								<ItemTask key={item.id} task={item} index={i} eventDelTask={delTask}
										  eventCheckTask={doneTask}/>
							))}
						</ul>
						:
						<div className="list-group-item empty-list">
							<img src={process.env.PUBLIC_URL + "/assets/leaf.svg"} alt="Empty" width="48"
								 className="mt-3"/>
							<div className="empty-list__title">
								Список дел пуст
							</div>
						</div>
					}
				</div>

				<div className="card bg-light">
					<div className="card-header">
						Добавить новую задачу
					</div>
					<div className="card-body">
						<FormTask create={addTask}/>
					</div>
				</div>

				<button className="btn btn-secondary mt-4 float-right" onClick={cleanDoneTasks}>
					Удалить выполненные задачи
				</button>
			</div>
		</>
	)
}

export default App;