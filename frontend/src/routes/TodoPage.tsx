import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  List,
  ListItem,
  Center, Heading, HStack, SimpleGrid, Text
} from "@chakra-ui/react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";



interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
  date : Date;
}


function Todos() {
  const [text, setText] = useState<string>("");
  const [selectDay, setSelectDay] = useState<number>(1);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [todos, setTodos] = useState<Todo[]>(() => {
    const localData = localStorage.getItem('todos');
    return localData ? JSON.parse(localData) : [];
  });
  const [displayedTodos, setDisplayedTodos] = useState<Todo[]>([]);


  // todos와 date state 값의 변화를 탐지 
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

    const displayedTodos = todos.filter((todo) => {
      const todoDate = new Date(todo.date);
      return (
        todoDate.getFullYear() === currentDate.getFullYear() &&
        todoDate.getMonth() === currentDate.getMonth() &&
        todoDate.getDate() === selectDay
      );
    });

    setDisplayedTodos(displayedTodos);
  }, [todos, currentDate, selectDay]);
  

  // 캘린더 월 변경
  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1));
    handleDisplayedTodos(1);
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1));
    handleDisplayedTodos(1);
  };



  // 날짜 클릭하면 해당하는 날의 todos 출력
  const handleDisplayedTodos = (day: number) => {

    setSelectDay(day);

    const displayedTodos = todos.filter((todo) => {
      const todoDate = new Date(todo.date)

      return (
        todoDate.getFullYear() === currentDate.getFullYear() &&
        todoDate.getMonth() === currentDate.getMonth() &&
        todoDate.getDate() === day
      );
    });
    setDisplayedTodos(displayedTodos);
  };


  // 기본 Todo 프로그램 로직.
  const handleAddTodo = (): void => {
    if (text.trim() === '') return;

    const selectDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), selectDay);

    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    const newTodoItem = { id: newId, text: text, isCompleted: false, date: selectDate};

    // 현재 todos에 새로운 Todo 추가
    setTodos([...todos, newTodoItem]);

    // localStorage에 todos 저장
    localStorage.setItem('todos', JSON.stringify([...todos, newTodoItem]));

    setText('');
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <>
      {/* 캘린더 */}
      <Box>
        {/* 오늘의 상태 */}

        <Center mb={10}>
          <HStack>
            <Button onClick={handlePrevMonth}>
              <AiFillCaretLeft />
            </Button>
            <Heading size="md">{currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}</Heading>
            <Button onClick={handleNextMonth}>
              <AiFillCaretRight />
            </Button>
          </HStack>
        </Center>
        <SimpleGrid columns={7} spacing={2} mt={4} w={'30%'} m={'auto'} textAlign={'center'}>
          {Array.from({ length: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay() }, (_, i) => (
            <Box key={`empty-${i}`} />
          ))}
          {Array.from({ length: new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate() }, (_, i) => (
            <Button
              key={`day-${i}`} 
              p={2}
              borderRadius="md"
              bg="gray.100" 
              colorScheme={(i + 1 === selectDay ? 'red.100': 'gray')} 
              bgColor={(i + 1 === selectDay ? 'red.300': 'gray.300')} 
              onClick={() => handleDisplayedTodos(i + 1)}
            >
              <Text>{i + 1}</Text>
            </Button>
          ))}
        </SimpleGrid>
      </Box>
      {/* */}
      {/* 투두 목록 */}
      <Box maxW="sm" mx="auto" mt="8">
        <FormControl>
          <FormLabel>할 일</FormLabel>
          <Input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button mt="4" onClick={handleAddTodo}>
            추가
          </Button>
        </FormControl>
        <List mt="8">
          {displayedTodos.length > 0 ? displayedTodos.map((displayedTodo) => (
            <ListItem key={displayedTodo.id}>
              <Checkbox
                isChecked={displayedTodo.isCompleted}
                onChange={() => handleToggleTodo(displayedTodo.id)}
              >
                {displayedTodo.text}
              </Checkbox>
              <Button ml="4" onClick={() => handleDeleteTodo(displayedTodo.id)}>
                삭제
              </Button>
            </ListItem>
          )) : <Text>선택한 날짜의 할 일이 없습니다.</Text>}
        </List>
      </Box>
      
      {/* */}
    </>
  );
}

export default Todos;


