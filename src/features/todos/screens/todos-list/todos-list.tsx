// @components
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

// @packages
import React from "react";
import { useQuery } from "@apollo/client";
import { SubmitHandler, useForm } from "react-hook-form";

// @scripts
import { Todo } from "../../models";
import { todoMutations } from "../../apollo/operations/mutations";
import { GET_ALL_TODOS } from "../../apollo/operations/queries";

type TodoFormInputs = {
  name: string;
  dueDate: string;
};

export const TodoList: React.FC = () => {
  const { data } = useQuery(GET_ALL_TODOS);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TodoFormInputs>();

  const onSubmit: SubmitHandler<TodoFormInputs> = (data) => {
    const dueDate = new Date(data.dueDate);

    todoMutations.addTodo({
      name: data.name,
      dueDate,
    });

    reset();
  };

  return (
    <Container>
      <Grid container>
        <Grid xs={12} md={4} item>
          <Container>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <Typography variant="h5">Add a todo</Typography>
              <TextField
                id="name"
                label="Name"
                margin="normal"
                variant="outlined"
                error={!!errors.name}
                helperText={errors.name?.message}
                fullWidth
                {...register("name", { required: "This field is required" })}
              />

              <TextField
                id="due-date"
                label="Due Date"
                margin="normal"
                type="date"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                error={!!errors.name}
                helperText={errors.name?.message}
                fullWidth
                {...register("dueDate", { required: "This field is required" })}
              />

              <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                fullWidth
              >
                Add
              </Button>
            </form>
          </Container>
        </Grid>

        <Grid xs={12} md={8} item>
          <Container>
            <Typography variant="h4" component="h2">
              Todos List
            </Typography>
            <ul>
              {data?.todos?.map((todo: Todo) => (
                <li key={`todo-${todo.id}`}>{todo.name}</li>
              ))}
            </ul>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export const TodoListScreen = React.memo(TodoList);
