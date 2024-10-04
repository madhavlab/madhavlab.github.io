1. Principles:  

We have 4 separate levels where our lab data is stored: 

Every user has its own home repository and can be accessed at /users/<username>. Your home directory, by default, can be accessed by other group members to facilitate easy collaboration. Users can use the command <chmod> to control who can access what.  

User accounts are created on SSD, which is used as login node. 

Every user is allocated a disk quota of 100 GB. 

This repository is only meant to store the files (for e.g., codes) and must not be used for experiments purpose, i.e., do not dump your experiments outputs here.  

Every user is assigned a repository on the HDD and can be accessed at /hdd_storage/scratch/<username>. Users can store their experiments related output data in this repository.  

The shared data (read-only) that group members can access is managed as follows: 

Audio related databases:  /hdd_storage/data/<database name> 

Applications: /hdd_storage/data/<application name> 

A part of the storage is dedicated to the dump repository located at /hdd_storage/experiments_dump/. Most experiments involve generating intermediate results which may not be relevant after some point of time. Hence, you are encouraged to dump those here. By convention, you may create your own dump repository at the following path: /hdd_storage/experiments_dump/<username>. Its contents will be deleted when we run into storage space problems. 

 

2. Running Jobs: 

2.1 Work at home:  

Our servers can be accessed only on the IITK network. IITK has a VPN service that allows you to connect with the IITK network from anywhere. Detailed instructions on using VPN can be found here. 

2.2 GPU servers:  

Sudoer of all the servers: Sachin 

Sanganak41 (172.26.83.141): 4x RTX3080 10GB GPU cards  

Sanganak42 (172.26.83.142): 4x RTX3080 10GB GPU cards 

Sanganak43 (172.26.83.143): 3x A30 24GB GPU cards 

Sanganak44 (172.26.83.144): 2x … 8GB GPU cards 

2.3 Access GPU servers: 

Users are encouraged to enable SSH-based login to allow easy access OR 

 ssh <username>@<gpu server ip address> OR 

Users may use the following command to allow port forwarding (example, running Jupyter notebooks remotely) and remote graphics rendering (example: using MATLAB remotely): ssh -X –L 8000:localhost:<remote port number to be forwarded>  <username>@<gpu server ip address> 

 

3. Troubleshoot/Request Sudoer: 

Users may post their queries on the “Compute channel” related to accessing the servers or other issues.  

To install a package on the server that requires sudo access, the user should send a request via email/Teams to the sudoer (and put Prof. Vipul Arora in cc) of the respective server --> (Internal request platform to be created by Sachin) 

4. Tips and Tricks: 

Use rsync to allow fast transfer of files. It also resumes transfer operation if it failed earlier due to some reason. 

Use crontab to schedule a regular backup of your codes to your local machine or vice versa. 

Use sshfs (fast) or sftp (slow) to mount remote repositories onto your local machine. 

 

5. Malpractice: 

Users must avoid the following practices while using the servers to allow a smooth experience for every user. 

Occupying all the GPUs for a longer period. If required, the user must take permission from Prof. Vipul Arora and inform all the server users beforehand.  

Not shutting the Jupyter notebook when not required. It consumes memory space and should be freed. 

Use all CPU cores when multiprocessing/multithreading to speed up your codes. 

Doing experiments from your home directory instead of scratch directory. Heavy read/write operations on SSD (For example, loading data batches from SSD during training a model) will make the SSH access slow. 