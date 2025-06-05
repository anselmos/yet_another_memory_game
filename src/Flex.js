import logo from './logo.svg';
import './Flex.css';

export default function Flex() {
  return (
    <div className="Flex-main">
      <table>
        <tr>
	  <td>1.1</td>
	  <td>1.2</td>
        </tr>
        <tr>
	  <td>2.1</td>
	  <td>2.2</td>
        </tr>
      </table>
      <div className="Flex-direction-none">
	  No style
	  <div>1.1</div>
	  <div>1.2</div>
      </div>
      <div className="Flex-direction-1">
	  Direction-row
	  <div>1.1</div>
	  <div>1.2</div>
      </div>
      <div className="Flex-direction-2">
	  Direction-row-reverse
	  <div>1.1</div>
	  <div>1.2</div>
      </div>
      <div className="Flex-direction-3">
	  Direction-column
	  <div>1.1</div>
	  <div>1.2</div>
      </div>
      <div className="Flex-direction-4">
	  Direction-column-reverse
	  <div>1.1</div>
	  <div>1.2</div>
      </div>
    </div>
  );
}

