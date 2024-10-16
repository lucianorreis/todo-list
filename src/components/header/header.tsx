import styles from "./styles.module.scss"
import { StatsCard } from "../statsCard/StatsCard";

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div>
                    <h1>My Todo</h1>
                
                    <span>Bem vindo, Luciano!</span>
                </div>

                <div>
                    <StatsCard title="Total de Tarefas" value={5} />
                    <StatsCard title="Tarefas Pendentes" value={4} />
                    <StatsCard title="Tarefas Concluidas" value={1} />

                </div>
            </div>
        </header>   
    );
};