import { useState } from "react";

export function Todo() {
    const [task, settask] = useState(["Feed the cow", "Fajar Time"]);

    // Styles as objects
    const styles = {
        container: { fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: '20px auto', textAlign: 'center' },
        inputGroup: { display: 'flex', gap: '10px', marginBottom: '20px' },
        input: { flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #1b1919' },
        addButton: { padding: '8px 15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' },
        listItem: { 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            padding: '10px', 
            marginBottom: '5px', 
            backgroundColor: '#2d2b2b',     
            border: '1px solid #ddd',
            borderRadius: '4px'
        },
        deleteBtn: { marginLeft: '10px', backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '3px', cursor: 'pointer' },
        moveBtn: { background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }
    };

    function addTask() {
        const input = document.getElementById("addTask");
        const newTask = input.value;
        if (newTask.trim() !== "") {
            settask([...task, newTask]);
            input.value = "";
        }
    }

    function removeTask(index) {
        settask(task.filter((_, i) => i !== index));
    }

    function moveUp(index) {
        if (index > 0) {
            const updatedTasks = [...task];
            // Swap elements using destructuring
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            settask(updatedTasks);
          
        }
    }

    function moveDown(index) {
        if (index < task.length - 1) {
            const updatedTasks = [...task];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            settask(updatedTasks);
        }
    }

    return (
        <div className="todo" style={styles.container}>
            <div className="inputcon" style={styles.inputGroup}>
                <input type="text" id="addTask" placeholder="Enter a task..." style={styles.input} />
                <button onClick={addTask} style={styles.addButton}>Add</button>
            </div>
            
            <div className="outputcon">
                <ol style={{ padding: 0, listStyle: 'none' }}>
                    {task.map((t, index) => (
                        <li key={index} style={styles.listItem}>
                            <span style={{ flex: 1, textAlign: 'left' }}>{t}</span>
                            <div>
                                <button onClick={() => moveUp(index)} style={styles.moveBtn}>☝️</button>
                                <button onClick={() => moveDown(index)} style={styles.moveBtn}>👇</button>
                                <button onClick={() => removeTask(index)} style={styles.deleteBtn}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}