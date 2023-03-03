import styled from "styled-components";

import alemania from "../../../public/assets/flags/alemania.png";
import belgica from "../../../public/assets/flags/belgica.png";
import canada from "../../../public/assets/flags/canada.png";
import chile from "../../../public/assets/flags/chile.png";
import ecuador from "../../../public/assets/flags/ecuador.png";
import espana from "../../../public/assets/flags/espana.png";
import francia from "../../../public/assets/flags/francia.png";
import usa from "../../../public/assets/flags/usa.png";

const SeminarContainer = styled.div`
  background: var(--main-red-blue);
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  padding: 0 3rem;
`;

const CardInfoWrapper = styled.div`
  width: 20rem;
  div:first-child {
    text-align: center;
    margin: 1rem;
    font-size: 20px;
    font-weight: 600;
  }
`;

export const PosgradesSeminaires = () => {
  return (
    <SeminarContainer>
      <CardInfoWrapper>
        <div>Francia</div>
        <div>
          <img src={francia} alt="Francia" />
        </div>
        <div>
          <ul>
            <li>
              <a href="https://drive.google.com/uc?export=download&id=1d2xupnDKaaWAUvqUfL4bRdZa6F7Y_H7o">
                Maestrías: Viviana Gavilanes
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/uc?export=download&id=1HvrG1lej5r0k710cq2wl7QYPmJOQyfty">
                Doctorados: Katherine Morales
              </a>
            </li>
          </ul>
        </div>
      </CardInfoWrapper>
      <CardInfoWrapper>
        <div>Alemania</div>
        <div>
          <img src={alemania} alt="Alemania" />
        </div>
        <div>
          <ul>
            <li>
              <a href="https://drive.google.com/uc?export=download&id=1TK7RzjgxsESTrTR4PJ7N2gH0pBvQ6PDO">
                Doctorados: Maribel Montenegro
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/uc?export=download&id=1jPQIGhJ1vSBR1aypEyNnjQrcZvokPdTh">
                Doctorados: Jorge Luis Chicaiza
              </a>
            </li>
          </ul>
        </div>
      </CardInfoWrapper>
      <CardInfoWrapper>
        <div>Estados Unidos</div>
        <div>
          <img src={usa} alt="usa" />
        </div>
        <div>
          <ul>
            <li>
              <a href="https://drive.google.com/uc?export=download&id=1lp_wAipdkn5QkWhE8HUZUC1RFjcDyEwt">
                Doctorados: Roberto Torres
              </a>
            </li>
          </ul>
        </div>
      </CardInfoWrapper>
      <CardInfoWrapper>
        <div>Chile</div>
        <div>
          <img src={chile} alt="Chile" />
        </div>
        <div>
          <ul>
            <li>
              <a href="https://drive.google.com/uc?export=download&id=1Qy2oCIbsN62V4OUkVbtWdNfKx_oezHWM">
                Maestrías: Carlos Ajila
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/uc?export=download&id=1mra5hSN54BuaQ1mj15oJ5aWfrIbJ5Cb7">
                Doctorados: Cristian Núñez
              </a>
            </li>
          </ul>
        </div>
      </CardInfoWrapper>
      <CardInfoWrapper>
        <div>Canada</div>
        <div>
          <img src={canada} alt="Canada" />
        </div>
        <div>
          <ul>
            <li>
              <a href="https://drive.google.com/uc?export=download&id=1AkFh6H30P1TzfO53p33i9VCwdCMwB1HE">
                Doctorados: Leonardo Montoya
              </a>
            </li>
          </ul>
        </div>
      </CardInfoWrapper>
      <CardInfoWrapper>
        <div>Bélgica</div>
        <div>
          <img src={belgica} alt="Belgica" />
        </div>
        <div>
          <ul>
            <li>
              <a href="https://drive.google.com/uc?export=download&id=1JBHnmF09OVy41IkHDRtXwdMGSarhLUib">
                Maestrías - Doctorados: Andrea García
              </a>
            </li>
          </ul>
        </div>
      </CardInfoWrapper>
      <CardInfoWrapper>
        <div>Ecuador</div>
        <div>
          <img src={ecuador} alt="Ecuador" />
        </div>
        <div>
          <ul>
            <li>
              <a href="https://drive.google.com/uc?export=download&id=1beKKPk5azJn5pWCeJPVyebkd7myBE84B">
                Maestrías: Paola Quiloango
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/uc?export=download&id=1KHcB_nhu2HOfwtqGe7SwCpzV9dpEWQhL">
                Doctorados: Paula Castro
              </a>
            </li>
          </ul>
        </div>
      </CardInfoWrapper>
      <CardInfoWrapper>
        <div>España</div>
        <div>
          <img src={espana} alt="Espana" />
        </div>
        <div>
          <ul>
            <li>
              <a href="https://drive.google.com/uc?export=download&id=11Er0M4NJwVz6lPYQPJbGjzG71Hx5HGXu">
                Maestrías: Alex Pérez
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/uc?export=download&id=1CPXemVX3CZXLUt2N4THkAY3Xj-vBN_ro">
                Maestrías - Doctorados: Miguel Flores
              </a>
            </li>
          </ul>
        </div>
      </CardInfoWrapper>
    </SeminarContainer>
  );
};
