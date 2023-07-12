import React from 'react';

const ItemTask = ({task, index, eventDelTask, eventCheckTask}) => {

	function onClickBtnDelTask() {
		eventDelTask(task);
	}

	function onClickBtnCheckTask() {
		eventCheckTask(task);
	}

	return (
		<li className="list-group-item d-flex justify-content-between task-item">
			<span className={task.checked !== true ? "task-title" : "task-title done"}>{++index}. {task.text}</span>
			<div className="task-item__buttons">
				<button type="button" className="btn-action" onClick={onClickBtnCheckTask}>
					<img src={process.env.PUBLIC_URL + "/assets/tick.svg"} alt="Done" width="18" height="18"/>
				</button>
				<button type="button" className="btn-action" onClick={onClickBtnDelTask}>
					<img src={process.env.PUBLIC_URL + "/assets/cross.svg"} alt="Done" width="18" height="18"/>
				</button>
			</div>
		</li>
	);
};

export default ItemTask;