const supabaseUrl = 'https://rarwxukfpxhlqjiqjqjt.supabase.co'; // Aizstāj ar savu Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhcnd4dWtmcHhobHFqaXFqcWp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyMDg0NTksImV4cCI6MjA3OTc4NDQ1OX0.Y38-xgmx0fNq25LxGAMaeOKmzElJCWeBf3J0L080GCQ'; // Aizstāj ar savu anon key
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

async function fetchTasks() {
    const { data, error } = await supabase
        .from('tasks')
        .select('*');
    
    if (error) {
        console.error('Kļūda:', error);
        document.getElementById('tasks').innerHTML = '<p>Kļūda datu ielādē.</p>';
    } else {
        const tasksDiv = document.getElementById('tasks');
        tasksDiv.innerHTML = data.map(task => 
             `<div>
                <h3>${task.name}</h3>
                <p>Apraksts: ${task.description}</p>
                <p>Statuss: ${task.status}</p>
            </div>`
        ).join('');
    }
}
fetchTasks();
