import { initializeApp } from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

//   const app = initializeApp(firebaseConfig);

const DatasetUpload = () => {
  const db = getFirestore();

  const userId = "AllComments";
  const data = {'emp0': ['Aarav', '07/07/2023, 10:22:28', 'This is First Comment'],
  'emp8': ['Ashish','08/07/2023, 15:26:22', 'This is Second Comment'],
  'emp32': ['Aditi', '08/07/2023, 18:25:45', 'This is Third Comment'],
  'emp33': ['Aishwarya', '09/07/2023, 8:45:38', 'This is Fourth Comment'],
  'emp34': ['Akanksha', '09/07/2023, 22:52:48', 'This is Fifth Comment'],
};

  const setData = async () => {
    try {
      for (let i of Object.values(data)) {
        const docRef = await addDoc(collection(db, userId), {
          name: i[0],
          time: i[1],
          comment: i[2],
        });
        console.log("Document written with ID: ", docRef.id);
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    console.log("sucessfully submitted");
  };
  return <button onClick={setData}>Submit</button>;
};

export default DatasetUpload;
