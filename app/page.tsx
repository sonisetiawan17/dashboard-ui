import Wrapper from './components/Wrapper';
import Sidebar from './components/sidebar/Sidebar';
import Statistic from './components/statistic/Statistic';

export default function Home() {
  return (
    <div
      className="
        lg:grid 
        lg:grid-cols-[380px_1fr] 
        h-screen
      "
    >
      <div className=" bg-[#C52424] hidden lg:block">
        <Wrapper sidebar>
          <Sidebar />
        </Wrapper>
      </div>
      <Wrapper>
        <Statistic />
      </Wrapper>
    </div>
  );
}
