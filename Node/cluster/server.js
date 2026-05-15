import os from "os"
import cluster from "cluster"
import express from "express"


const cors = os.cpus().length
const app = express();

app.get("/",(req,res)=>{
    return res.json({
        message: `Process id: ${process.pid}`,
        workerId: cluster.worker?.id ?? null
    })
})

if(cluster.isPrimary)
{
    cluster.schedulingPolicy = cluster.SCHED_RR

    for (let i = 0; i < cors; i++) {
        cluster.fork()
        
    }
}
else{
    app.listen(3000,()=>{
        console.log(`Worker ${cluster.worker?.id} (pid ${process.pid}) listening on Port: 3000`)
    })
}
