import React , { useState , useEffect} from 'react';
import { Box , Button , Stack , TextField , Typography } from '@mui/material';
import { exercisesOptions , fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({setExercises , bodyPart , setBodyPart}) => {
   const [search , setSearch] = useState("good");
  //  const [exercises , setExercises] = useState([]);
   const [bodyParts , setBodyParts ] = useState([]);

   useEffect( () => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList" , exercisesOptions);
      setBodyParts(["all" , ...bodyPartsData]);
     // console.log(bodyPartsData)
    }
    fetchExercisesData();
   // console.log(bodyParts)
   } ,[])

   const handleSearch = async () => {
    if(search){
      const exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises" , exercisesOptions);
      const searchdExercises = exercisesData.filter(
        (exercise) => {
          exercise.name.toLowerCase().include(search)
        || exercise.target.toLowerCase().include(search)
        || exercise.equipment.toLowerCase().include(search)
        || exercise.bodyPart.toLowerCase().include(search)
        }
      );
      setSearch("");
      setExercises(searchdExercises)
    }
    else{
      console.log("empaty")
    }
   }
  return (
   <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
    <Typography 
     fontWeight={700} mb="50px" textAlign="center"
     sx={{
      fontSize : {lg: "44px" , xs: "30px"} 
     }}
    >
      Awesome Exercises You <br />
      Should Know
    </Typography>
    <Box position="relative" mb="72px">
      <TextField
      type="text"
      sx={{
        input: {
          fontWeight: "700",
          border: "none",
          borderRadius: "4px"
        },
        width: {lg: "800px" , xs: "350px"},
        backgroundColor: "#fff",
        borderRadius: "40px",
      }}
       height="76px"
       value={search}
       onChange={(e) => e.target.value.toLocaleLowerCase()}
       placeholder="Search Exercises"
      />
      <Button
       className="search-btn"
       sx={{
        bgcolor: "#FF2625",
        color: "#fff",
        textTransform: "none",
        width: {lg: "175px" , xs: "80px"},
        fontSize: {lg: "20px" , xs: "14px"},
        height: "56px",
        position: "absolute",
        right: "0"
       }}
       onClick={handleSearch}
      >
        Search
      </Button>
    </Box>
    <Box sx={{
      position: "relative" , width: "100%" , p: "20px"
    }}>
      <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
    </Box>
   </Stack>
  )
}

export default SearchExercises