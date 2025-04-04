import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

export const SideNav = ({ open, cardList }) => {
  console.log(cardList);
  const navElements = () => (
    <div style={{ minWidth: "200px", height: "100vh", padding: "5px" }}>
      <List>
        {cardList?.map((card) => (
          <ListItem button key={card.id}>
            <ListItemText primary={card.taskHeading} />
            <ListItemIcon>
              <svg
                class="fill-darkCyan-200 hover:fill-darkCyan-400"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path
                  d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 
                                56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 
                                0h80v-360h-80v360ZM280-720v520-520Z"
                />
              </svg>
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return <div>{open && navElements()}</div>;
};
