// 이 코드는 HTML 페이지가 완전히 로드되면 실행됨.
document.addEventListener('DOMContentLoaded', () => {
    // HTML에서 새로운 할 일을 입력하는 상자와 추가 버튼, 할 일 목록을 가져옴.
    const newTaskInput = document.getElementById('new-task'); // 새로운 할 일을 입력하는 상자임.
    const addTaskButton = document.getElementById('add-task'); // '추가' 버튼임.
    const taskList = document.getElementById('task-list'); // 할 일 목록임.

    // '추가' 버튼을 클릭했을 때 할 일을 추가하는 함수임.
    addTaskButton.addEventListener('click', () => {
        // 입력 상자에서 새로운 할 일 텍스트를 가져옴.
        const taskText = newTaskInput.value.trim(); // trim()은 양쪽 끝의 빈칸을 없앰.

        // 만약 입력 상자가 비어 있지 않다면(공백이면 거짓으로 판단되기 때문)
        if (taskText) {
            // 새로운 할 일 항목을 만듦.
            const taskItem = document.createElement('li'); // <li> 요소를 만듦.
            taskItem.textContent = taskText; // <li> 요소 안에 할 일 텍스트를 넣음.

            // 완료 버튼과 삭제 버튼을 넣을 상자를 만듦.
            const taskButtons = document.createElement('div'); // <div> 요소를 만듦.
            taskButtons.classList.add('task-buttons'); // <div>에 'task-buttons'라는 이름을 붙임.

            // 삭제 버튼을 만듦.
            const deleteButton = document.createElement('button'); // <button> 요소를 만듦.
            deleteButton.textContent = '삭제'; // 버튼에 '삭제'라고 씀.
            // 삭제 버튼을 클릭하면 할 일 항목을 삭제함.
            deleteButton.addEventListener('click', () => {
                taskItem.remove(); // 할 일 항목을 삭제함.
            });

            // 완료 버튼을 만듦.
            const completeButton = document.createElement('button'); // <button> 요소를 만듦.
            completeButton.textContent = '완료'; // 버튼에 '완료'라고 씀.
            // 완료 버튼을 클릭하면 할 일 항목을 완료 표시함.
            completeButton.addEventListener('click', () => {
                taskItem.classList.toggle('completed'); // 할 일 항목에 줄을 긋거나 지움.
                //toggle 메소드는 클래스 리스트에 특정 클래스(이 경우에는 completed)가
                //이미 존재하는지 확인하고, 있으면 제거하고 없으면 추가하는 역할을 함.
            });

            // taskButtons 상자에 완료 버튼과 삭제 버튼을 넣음.
            taskButtons.appendChild(completeButton); // 완료 버튼을 상자에 넣음.
            taskButtons.appendChild(deleteButton); // 삭제 버튼을 상자에 넣음.

            // 할 일 항목에 taskButtons 상자를 넣음.
            taskItem.appendChild(taskButtons); // 할 일 항목에 버튼 상자를 넣음.

            // 할 일 목록에 새로운 할 일 항목을 넣음.
            taskList.appendChild(taskItem); // 할 일 목록에 할 일 항목을 넣음.

            // 입력 상자를 비우고 다시 입력할 수 있도록 포커스를 맞춤.
            newTaskInput.value = ''; // 입력 상자를 비움.
            newTaskInput.focus(); // 입력 상자에 포커스를 맞춤.
        }
    });
});
