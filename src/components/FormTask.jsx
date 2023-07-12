import React, {useState} from 'react';

const FormTask = ({create}) => {
	const [taskText, setTaskText] = useState("Текст");

	function onClickBtnCreateTask(e) {
		e.preventDefault();
		create({text: taskText});
		setTaskText('');
	}

	return (
		<form className={'form'}>
			<div className="form-group">
				<input type="text" className="form-control" placeholder="Текст задачи" required value={taskText}
					   onChange={(e) => setTaskText(e.target.value)}/>
				<small className="form-text text-muted">Что делаем, сколько времени тратим, какой результат
					получаем.</small>
			</div>
			<button type="submit" className="btn btn-primary btn-lg active" onClick={onClickBtnCreateTask}>Добавить
			</button>
		</form>
	);
};

export default FormTask;