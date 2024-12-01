import Routing from './Router';
import { DataContext } from './components/DataProvider/DataProvider';
import { Type } from './Utillty/acthion.type';
import { auth } from './Utillty/firebase';
import { useContext, useEffect } from 'react';

const App = () => {

  const [{ user }, dispatch] = useContext(DataContext)

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser)
        dispatch({
          type: Type.SET_USER,
          user: authUser
        })
      } else {

        dispatch({
          type: Type.SET_USER,
          user: null
        })
      }
    })
  }, [])





  return (
    <Routing />
  );
};

export default App;
