import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from '../../../../firebase/firebase';
import "./updateuser.css";

const UpdateUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userDoc = await getDoc(doc(db, "user", id));
                if (userDoc.exists()) {
                    setUser({ id: userDoc.id, ...userDoc.data() });
                } else {
                    console.error("User not found");
                }
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };

        fetchUser();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!user.Prenom || !user.Nom || !user.Téléphone || !user.Email || !user.Status) {
                toast.error("Please fill in all fields correctly.");
                return;
            }

            let updateUser = { ...user };
            await updateDoc(doc(db, "user", id), updateUser);
            toast.success("User updated successfully");
            setTimeout(() => navigate("/etudiant"), 2000); // Delay for the toast to show
        } catch (error) {
            console.error("Error updating user:", error);
            toast.error("Error updating user");
        }
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className='NewTables-2'>
            {/* <ToastContainer /> */}
            <h2 className='text-center'>Update User</h2>
            <div className='login-box mt-4'>
                <form onSubmit={handleSubmit}>
                    <div className='user-box'>
                        <input
                            type="text"
                            value={user.Prenom}
                            onChange={(e) => setUser({ ...user, Prenom: e.target.value })}
                        />
                        <label>Prenom</label>
                    </div>
                    <div className='user-box'>
                        <input
                            type="text"
                            value={user.Nom}
                            onChange={(e) => setUser({ ...user, Nom: e.target.value })}
                        />
                        <label>Nom</label>
                    </div>
                    <div className='user-box'>
                        <input
                            type="number"
                            value={user.Téléphone}
                            onChange={(e) => setUser({ ...user, Téléphone: e.target.value })}
                        />
                        <label>Téléphone</label>
                    </div>
                    <div className='user-box'>
                        <input
                            type="email"
                            value={user.Email}
                            onChange={(e) => setUser({ ...user, Email: e.target.value })}
                        />
                        <label>E-mail</label>
                    </div>
                    <div className='user-box'>
                        <input
                            type="text"
                            value={user.Status}
                            onChange={(e) => setUser({ ...user, Status: e.target.value })}
                        />
                        <label>Status</label>
                    </div>
                    <center className='center'>
                        <button type='submit' className='update'>
                            Update
                            <span></span>
                        </button>
                        <button
                            type='button'
                            className=''
                            onClick={() => navigate(-1)}
                        >
                            Go Back
                        </button>
                    </center>
                </form>
            </div>
            <ToastContainer
                position='top-center'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                style={{ width: "auto", textAlign: "center" }}
            />
        </div>
    );
};

export default UpdateUser;
