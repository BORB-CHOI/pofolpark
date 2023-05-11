import { Box, Input, InputGroup, InputLeftElement, Stack, Button } from "@chakra-ui/react";
import { GiGoalKeeper } from "react-icons/gi";
import { RiEmotionLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { useState } from "react";


// 1 상태 값 받기
// 2 목표 값 받기

// API 요청하기

interface IVariables {
    condition: string;
    todo:string;
}



function StateGenerator() {
    const {register, handleSubmit} = useForm<IVariables>();


    const onSubmit = (data:IVariables) =>{
        
    }


    return (
    <Stack 
        h={300}
        justifyContent={'center'}
        alignItems={'center'}
        as="form"
        onSubmit={handleSubmit(onSubmit)}
    >
        <InputGroup w={300}>
            <InputLeftElement
                children={
                <Box color="gray.500">
                    <RiEmotionLine />
                </Box>
                }
            />
            <Input 
                {...register('condition', {required:true})}
                variant={"filled"}
                placeholder="Your Condition"
            />
        </InputGroup>
        <InputGroup w={300}>
            <InputLeftElement
                children={
                <Box color="gray.500">
                    <GiGoalKeeper />
                </Box>
                }
            />
            <Input
                {...register('todo', {required:true})}
                variant={"filled"}
                placeholder="Your 'To Do'"
            />
        </InputGroup>

    </Stack>
    );
}


export default StateGenerator;